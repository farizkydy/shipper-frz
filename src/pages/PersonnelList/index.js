import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Spinner, Row, Col } from "reactstrap";

// IMPORTED FILES
import { getPersonnelLists } from "../../redux/actions/personnelActions";
import PersonnelCard from "../../components/PersonnelCard";

function PersonnelList() {
  const dispatch = useDispatch();
  const { personnelLists } = useSelector((state) => state.personnel);

  // state for pagination
  const [perPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // state for search
  const [search, setSearch] = useState("");
  const [filteredLists, setFilteredLists] = useState([]);

  // fetching data using useEffect and useDispatch
  useEffect(() => {
    dispatch(getPersonnelLists());
  }, [dispatch]);

  // using useEffect to search user based on their first name
  useEffect(() => {
    setFilteredLists(
      personnelLists.filter((item) =>
      // {console.log('item', item)
        item.name.first.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, personnelLists]);

  // function for pagination
  const changePage = (string) => {
    string === "back"
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(currentPage + 1);
  };

  return (
    <div className="personnel-list-container">
      <div className="personnel-list-bar">
        <div className="personnel-list-title">
          <h4>DRIVER MANAGEMENT</h4>
          <p>Data driver yang bekerja dengan anda</p>
        </div>

        <form className="find-add-personnel">
          <span className="input-form">
            <i class="fas fa-search"></i>
            <input
              type="text"
              placeholder="CARI DRIVER"
              onChange={(e) => setSearch(e.target.value)}
            />
          </span>

          <button className="add-personal">
            <span>TAMBAH DRIVER</span> <i class="fas fa-plus"></i>
          </button>
        </form>
      </div>

      {personnelLists.length !== 0 ? (
        <>
          <Row>
            {filteredLists
              .slice(currentPage * perPage - perPage, currentPage * perPage)
              .map((item) => (
                <Col key={item.login.uuid}>
                  <PersonnelCard
                    id={!item.id.value ? "123456" : item.id.value} // some users have id = null, so "123456" was made as default id
                    image={item.picture.medium}
                    firstName={item.name.first}
                    lastName={item.name.last}
                    phoneNumber={item.phone}
                    birthday={item.dob.date}
                    email={item.email}
                  />
                </Col>
              ))}
          </Row>
          <div className="next-prev-btn">
            {currentPage > 1 ? (
              <button onClick={() => changePage("back")}>
                <i class="fas fa-chevron-left"></i> Previous Page
              </button>
            ) : (
              <button disabled>
                <i class="fas fa-chevron-left"></i> Previous Page
              </button>
            )}
            {filteredLists.length - 1 > currentPage * perPage ? (
              <button onClick={() => changePage("next")}>
                Next Page <i class="fas fa-chevron-right"></i>
              </button>
            ) : (
              <button disabled>
                Next Page <i class="fas fa-chevron-right"></i>
              </button>
            )}
          </div>
        </>
      ) : (
        <Spinner
          style={{ width: "3rem", height: "3rem" }}
          color="secondary"
          className="loading"
        />
      )}
    </div>
  );
}

export default PersonnelList;
