export const List = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div>
      <Button variant="success" onClick={() => setModalShow(!modalShow)}>
        Apply
      </Button>

      <Create show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};
