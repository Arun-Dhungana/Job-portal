import React, { useEffect, useState } from "react";
import { Col, Row, Container, Dropdown, Pagination } from "react-bootstrap";
import { JobCard } from "../../components/JobCard";
import React from "react";
import http from "../../http";
import hotp from "../../lib/hot.avif";
import moment from "moment";
export const Hot = () => {
  const [hot, sethot] = useState([]);

  const [sortBy, setSortBy] = useState("");
  const [direction, setDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(30);
  const [totalPages, setTotalPages] = useState(1);
  const [paginated, setPaginated] = useState([]);
  const [pageLink, setPageLink] = useState([]);
  const [category, setCategory] = useState("");
  const [job, setJob] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await http.get("/front/hot");
        sethot(response.data);
        setJob(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);
  useEffect(() => {
    if (category.length) {
      if (category != "all") {
        let filt = hot.filter((data) => {
          return data.category == category;
        });

        if (sortBy.length) {
          let sorted = [...filt].sort((a, b) => {
            if (isNaN(parseFloat(a[sortBy])) || isNaN(parseFloat(b[sortBy]))) {
              if (moment(a[sortBy]).isValid() && moment(b[sortBy]).isValid()) {
                return moment(a[sortBy]) - moment(b[sortBy]);
              } else {
                let x = a[sortBy].toLowerCase();
                let y = b[sortBy].toLowerCase();
                if (x < y) {
                  return -1;
                }
                if (x > y) {
                  return 1;
                }
                return 0;
              }
            } else {
              return a[sortBy] - b[sortBy];
            }
          });
          if (direction == "desc") {
            sorted.reverse();
          }
          setJob(sorted);

          setCurrentPage(1);
        } else {
          setJob(filt);
          setDirection("asc");
          setCurrentPage(1);
        }
      } else if (category == "all") {
        setJob(hot);
        setCurrentPage(1);
      }
    }
  }, [category]);
  useEffect(() => {
    if (sortBy.length) {
      let sorted = [...hot].sort((a, b) => {
        if (isNaN(parseFloat(a[sortBy])) || isNaN(parseFloat(b[sortBy]))) {
          if (moment(a[sortBy]).isValid() && moment(b[sortBy]).isValid()) {
            return moment(a[sortBy]) - moment(b[sortBy]);
          } else {
            let x = a[sortBy].toLowerCase();
            let y = b[sortBy].toLowerCase();
            if (x < y) {
              return -1;
            }
            if (x > y) {
              return 1;
            }
            return 0;
          }
        } else {
          return a[sortBy] - b[sortBy];
        }
      });
      if (direction == "desc") {
        sorted.reverse();
      }

      if (category.length) {
        if (category != "all") {
          let filt = sorted.filter((data) => {
            return data.category == category;
          });
          setJob(filt);
          setCurrentPage(1);
        } else if (category == "all") {
          setJob(sorted);
          setCurrentPage(1);
        }
      } else {
        setJob(sorted);
        setCurrentPage(1);
      }
    }
  }, [sortBy, direction]);

  useEffect(() => {
    let temp = (currentPage - 1) * perPage;
    setOffset(temp);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    let temp = [...job].splice(offset, perPage);
    let total = Math.ceil(job.length / perPage);

    setPaginated(temp);
    setTotalPages(total);
  }, [perPage, job, offset]);

  useEffect(() => {
    let temp = [
      <Pagination.Prev
        disabled={currentPage == 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      ></Pagination.Prev>,
    ];
    for (let i = 1; i <= totalPages; i++) {
      temp.push(
        <Pagination.Item
          key={i}
          active={i == currentPage}
          onClick={() => {
            setCurrentPage(i);
          }}
        >
          {i}
        </Pagination.Item>
      );
    }
    temp.push(
      <Pagination.Next
        disabled={currentPage == totalPages}
        onClick={() => setCurrentPage(currentPage + 1)}
      ></Pagination.Next>
    );
    setPageLink(temp);
  }, [totalPages, currentPage]);

  const handleSort = (key) => {
    if (direction == "desc") {
      setDirection("desc");
    } else if (direction == "asc") {
      setDirection("asc");
    }
    setSortBy(key);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} className="mt-3 mb-sm-3 mb-md-5 mx-0 p-0 " style={{}}>
          <Row className="mx-2">
            <Col
              xs={12}
              className=" text-nowrap ms-0 mb-sm-3 mb-md-5 ps-0"
              style={{}}
            >
              <h1
                className="  text-capitalize text-center "
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontWeight: "bolder",
                  backgroundImage: `url(${hotp})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "transparent",
                  backgroundClip: "text",
                }}
              >
                hot Jobs
              </h1>
            </Col>
            <Col xs={6} md={5} className="d-flex flex-row justify-content-end">
              <h6 className="d-inline p-1">Sort By </h6>
              <Dropdown className="d-inline mb-1">
                <Dropdown.Toggle
                  size="sm"
                  className=" border border-none text-black "
                  style={{
                    background: "lightgrey",
                  }}
                >
                  {sortBy}
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  {["name", "opening", "deadline", "salary"].map(
                    (data, index) => {
                      return (
                        <Dropdown.Item
                          key={index}
                          onClick={() => handleSort(data)}
                          className="text-capitalize"
                        >
                          {data}
                        </Dropdown.Item>
                      );
                    }
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs={6} md={5} className="d-flex flex-row justify-content-end">
              <h6 className="d-inline p-1">Category</h6>
              <Dropdown className="d-inline mb-1">
                <Dropdown.Toggle
                  size="sm"
                  className=" border border-none text-black"
                  style={{ background: "lightgrey" }}
                >
                  {category}
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                  {[
                    "bank-finance",
                    "ngo-ingo",
                    "sales-marketing",
                    "government",
                    "army-police",
                    "cooperative",
                    "school-college",
                    "healthcare",
                    "hotel-restaurant",
                    "customer_care",
                    "it-computer",
                    "logistics-supply_chain",
                    "all",
                  ].map((data, index) => {
                    return (
                      <Dropdown.Item
                        key={index}
                        onClick={() => setCategory(data)}
                        className="text-capitalize"
                      >
                        {data}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs={12} md={1} className="d-flex flex-row justify-content-end">
              <i
                onClick={() => setDirection("asc")}
                className={`fa-solid fa-arrow-up-short-wide p-2 ${
                  direction == "asc" ? "text-primary" : null
                }`}
              ></i>
              <i
                onClick={() => setDirection("desc")}
                className={`fa-solid fa-arrow-down-short-wide p-2 ${
                  direction == "desc" ? "text-primary" : null
                }`}
              ></i>
            </Col>
          </Row>
          {job.length ? (
            paginated.length ? (
              <Container>
                <Row className="justify-content-evenly ps-2 pe-2 mt-sm-2 mt-md-5">
                  <JobCard data={paginated}></JobCard>
                </Row>
                <Row>
                  <Col className="d-flex flex-row justify-content-center">
                    {totalPages > 1 ? pageLink.map((dataa) => dataa) : null}
                  </Col>
                </Row>
              </Container>
            ) : null
          ) : (
            <h2 className="text-center text-secondary">
              <i className="fa-solid fa-bug   mt-sm-2 mt-md-5"></i>
              Data Not Found
            </h2>
          )}
        </Col>
      </Row>
    </Container>
  );
};
