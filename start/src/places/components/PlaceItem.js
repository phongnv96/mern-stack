import React, { Component, useContext } from "react";
import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";
import { AuthContext } from "../../shared/context/auth-context";
import "./PlaceItem.css";
class PlaceItem extends Component {
  constructor(props) {
    super(props);
    this.state = { showMap: false, showConfirmModal: false };
  }
  // authContext = () => {
  //   return useContext(AuthContext);
  // }
  // static autContext = AuthContext;
  openMapHandler = () => {
    this.setState({ showMap: true });
  };

  closeMapHandler = () => {
    this.setState({ showMap: false });
  };

  showDeleteWarningHandler = () => {
    this.setState({ showConfirmModal: true });
  };

  cancleDeleteHandler = () => {
    this.setState({ showConfirmModal: false });
  };

  confirmDeleteHandler = () => {
    this.setState({ showConfirmModal: false });
    console.log("DELETING...");
  };

  render() {
    // let autContext = this.autContext;
    return (
      <React.Fragment>
        <Modal
          show={this.state.showMap}
          onCancel={this.closeMapHandler}
          header={this.props.address}
          contentClass="place-item__modal-content"
          footerClass="place-item__modal-actions"
          footer={
            <Button danger onClick={this.closeMapHandler}>
              Close
            </Button>
          }
        >
          <div className="map-container">
            <Map center={this.props.coordinates} zoom={16} />
          </div>
        </Modal>

        <Modal
          show={this.state.showConfirmModal}
          onCancel={this.cancleDeleteHandler}
          header="Are you sure?"
          footerClass="place-item_modal-actions"
          footer={
            <React.Fragment>
              <Button inverse onClick={this.cancleDeleteHandler}>
                CANCLE
              </Button>
              <Button danger onClick={this.confirmDeleteHandler}>
                DELETE
              </Button>
            </React.Fragment>
          }
        >
          <p>
            Do you want to proceed and delete this place? Please note that it
            can't be undone thereafter.
          </p>
        </Modal>
        <li>
          <AuthContext.Consumer>
            {auth => (
              <Card className="place-item__content">
                <div className="place-item">
                  <img src={this.props.image} alt={this.props.title} />
                </div>
                <div className="place-item__info">
                  <h2>{this.props.title}</h2>
                  <h3>{this.props.address}</h3>
                  <p>{this.props.description}</p>
                </div>
                <div className="place-item__actions">
                  <Button inverse onClick={this.openMapHandler}>
                    VIEW ON MAP
                  </Button>
                  {auth.isLoggedIn && (
                    <Button to={`/places/${this.props.id}`}>EDIT</Button>
                  )}
                  {auth.isLoggedIn && (
                    <Button danger onClick={this.showDeleteWarningHandler}>
                      DELETE
                    </Button>
                  )}
                </div>
              </Card>
            )}
          </AuthContext.Consumer>
        </li>
      </React.Fragment>
    );
  }
}

export default PlaceItem;
