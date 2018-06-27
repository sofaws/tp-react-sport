import React, {Component} from "react";
import InputText from "./inputText.component";

const container = {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 200,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
};

const popup = {
    backgroundColor: 'white',
    padding: '30px 0',
    maxHeight: '400px',  
    width: 400,
    borderRadius: "3px",
    boxShadow: '0 2px 100px rgba(0,0,0,0.6)',
};

const popupTitle = {
    fontSize: '1.2em',
    fontFamily: 'El Messiri',
};

const buttonSubmit = {
    backgroundColor: 'rgba(240, 240, 240, 0.4)',
    padding: '10px 15px',
    fontFamily: 'Roboto',
    borderRadius: '3px',
    borderWidth: '1px',
    marginTop: '15px',
}

class Popup extends Component {

    render() {
        return this.props.visible ?
            <div style={container} onClick={this.props.onClose}>
                <div style={popup} onClick={(e) => e.stopPropagation()}>
                    <div style={popupTitle}>Ajouter votre événement</div>
                    <form>
                        <InputText name="Ville"/>
                        <InputText name="Type d'événement"/>
                        <InputText name="Niveau"/>
                        <input style={buttonSubmit} type="submit" value="Ajouter"/>
                    </form>
                </div>
            </div>
            : null
    }
}



export default Popup;
