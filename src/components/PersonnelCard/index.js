import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardFooter } from "reactstrap";

function PersonnelCard(props) {
  const {
    id,
    image,
    firstName,
    lastName,
    phoneNumber,
    birthday,
    email,
  } = props;
  return (
    <Card className="user-profile">
      <CardFooter className="cardfooter">
        <p className="footer-wrapper">
          <div>
            <p>
              Driver ID: <b> {id.length < 7 ? id : id.slice(0, 8)}</b>
            </p>
            <i class="fas fa-ellipsis-h"></i>
          </div>
        </p>
      </CardFooter>
      <div className="cardImage-body">
        <div>
          <CardImg src={image} />
        </div>
        <div>
          <CardBody>
            <CardTitle className="card-content">
              <b>Nama Driver</b>
              <div>
                {firstName} {lastName}
              </div>
            </CardTitle>
            <CardTitle className="card-content">
              <b> Telepon</b> <div>{phoneNumber}</div>
            </CardTitle>
            <CardTitle className="card-content">
              <b>Email</b> <div>{email}</div>
            </CardTitle>
            <CardTitle className="card-content">
              <b>Tanggal Lahir</b>
              <div>
                {birthday.slice(0, 10).split("-")[2]}-
                {birthday.slice(0, 10).split("-")[1]}-
                {birthday.slice(0, 10).split("-")[0]}
              </div>
            </CardTitle>
          </CardBody>
        </div>
      </div>
    </Card>
  );
}

export default PersonnelCard;
