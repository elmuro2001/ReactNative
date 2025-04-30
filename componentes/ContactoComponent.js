import { FlatList,ListItem } from "react-native-gesture-handler";
import { Card } from "@rneui/themed";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { CONTACTO } from "../comun/contacto";

function RenderItem(props) {
    const item = props.item;
    
        if (item != null) {
            return(
                <Card>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Divider/>
                    <Text style={{margin: 20}}>
                        {item.descripcion}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

class Contacto extends Component {
        constructor(props) {
            super(props);
            this.state = {
                contacto: CONTACTO
            };
        }
      
        render(){
            return(<RenderItem item={this.state.contacto[0]} />);
        }
}

export default Contacto;