

import React, { Fragment, Component } from "react";
import SignatureCanvas from "react-signature-canvas";
import Button from '@material-ui/core/Button';
import styles from '../css/styles.module.css'
import { Typography } from "@material-ui/core";

 export default class DigitalSignature extends Component  {
  
    constructor(props){
        super(props)
        this.state ={
            trimmedDataURL : null,
        }
    }
    sigPad = {}
    clear = () => {
      this.sigPad.clear()
    }
    trim = () => {
        this.setState({ trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL('image/png') })

    }
    render(){
        return(
        <Fragment>
          
    
            <div className={styles.sigContainer}>
                <SignatureCanvas canvasProps={{className: styles.sigPad}}
                ref={(ref) => { this.sigPad = ref }} />
            </div>
            <div>
                <Button variant="contained" className={styles.buttons} color="primary" onClick={this.clear}>
                Borrar
                </Button>
             
                <Button variant="contained" color="primary" className={styles.buttons} onClick={this.trim}>
                Guardar
                </Button>
                <br/> <br/>
                <Typography variant="h6">
                Vista Previa
                </Typography>
                <label></label>
                <img className={styles.sigImage}
                src={this.state.trimmedDataURL} />
            </div>
       
        </Fragment>
        )
                
    }
       
}