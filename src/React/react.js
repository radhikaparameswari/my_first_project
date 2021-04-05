import { Typography, Icon, IconButton } from "@material-ui/core";
import React from "react";
import Button from '@material-ui/core/Button';
export default class Radhika extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <button>abc</button>
                <IconButton>
                <Icon>home</Icon>
                </IconButton>
                <Button variant="contained">Default</Button>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Button variant="contained" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" color="primary" href="#contained-buttons">
                    Link
                </Button>
                <Typography variant="h1" style={{ textAlign: "center", fontFamily: "serif" }}><i>Hello World</i></Typography>
            </div>
        )
    }
}