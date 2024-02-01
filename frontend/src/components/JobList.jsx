import moment from "moment";
import { useEffect, useState } from "react";
import {
  Row,
  Col,
  Pagination,
  Container,
  Dropdown,
  Button,
} from "react-bootstrap";
import { JobCard } from "./JobCard";

export const JobList = ({ data, sortable, title }) => {
  const [sortBy, setSortBy] = useState("");
  const [direction, setDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [perPage, setPerPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [paginated, setPaginated] = useState([]);
  const [pageLink, setPageLink] = useState([]);

  useEffect(() => {
    if (sortBy.length) {
      let sorted = [...data].sort((a, b) => {
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

      setCurrentPage(1);
    }
  }, [sortBy, direction]);

  useEffect(() => {
    let temp = (currentPage - 1) * perPage;
    setOffset(temp);
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    let temp = [...data].splice(offset, perPage);
    let total = Math.ceil(data.length / perPage);

    setPaginated(temp);
    setTotalPages(total);
  }, [perPage, offset, data]);

  useEffect(() => {
    let temp = [...data].splice(offset, perPage);
    setPaginated(temp);
  }, [offset]);

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
    if (sortable.includes(key)) {
      if (sortBy == key) {
        if (direction == "desc") {
          setDirection("desc");
        } else {
          setDirection("asc");
        }
      }
      setSortBy(key);
    }
  };

  return (
    <Col
      xs={12}
      className="mt-3 mb-3 mx-0 p-0 "
      style={{ boxShadow: "4px 4px 10px black", background: "lightgrey" }}
    >
      <Row>
        <Col xs={5} className=" text-nowrap ms-0 ps-0">
          <h3
            className=" ps-4 text-capitalize "
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
          >
            {title} Jobs
          </h3>
        </Col>
        <Col xs={3}>
          <Dropdown>
            <Dropdown.Toggle
              size="sm"
              className=" border border-none text-black"
              style={{ background: "lightgrey" }}
            >
              Sort By
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              {sortable.map((data, index) => {
                return (
                  <Dropdown.Item key={index} onClick={() => handleSort(data)}>
                    {data}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={4}>
          <i
            size="sm"
            onClick={() => setDirection("asc")}
            className={`fa-solid fa-arrow-up-short-wide p-2 ${
              direction == "asc" ? "bg-primary" : null
            }`}
          ></i>
          <i
            size="sm"
            onClick={() => setDirection("desc")}
            className={`fa-solid fa-arrow-down-short-wide p-2 ${
              direction == "desc" ? "bg-primary" : null
            }`}
          ></i>
        </Col>
      </Row>
      {data.length ? (
        <Container>
          <Row className="justify-content-center ps-2 pe-2">
            <Col xs={12} sm={6} md={4} lg={3} xlg={2} className=" mb-3 ">
              <JobCard data={paginated}></JobCard>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex flex-row justify-content-center">
              {totalPages > 1 ? pageLink.map((dataa) => dataa) : null}
            </Col>
            <Col className=" d-flex flex-row justify-content-end m-1 ">
              <Button
                size="sm"
                onClick={() => setPerPage(30)}
                style={{ fontWeight: "bolder" }}
              >
                View more
                <i className="fa-solid fa-angle-down"></i>
              </Button>
            </Col>
          </Row>
        </Container>
      ) : (
        <Row>
          <Col>
            <h2 className="text-center text-secondary">
              <i className="fa-solid fa-bug me-1"></i>Data Not Found
            </h2>
          </Col>
        </Row>
      )}
    </Col>
  );
};
