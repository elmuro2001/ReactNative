import React, {  Component } from 'react';
import { ScrollView,FlatList, } from "react-native-gesture-handler";
import { Card } from "@rneui/themed";
import { Text, View } from "react-native";
import { ACTIVIDADES } from '../comun/actividades';
import { QUIENESSOMOS } from '../comun/quienessomos';


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


class QuienesSomos extends Component {

            constructor(props) {
                super(props);
                this.state = {
                    quienessomos: QUIENESSOMOS,
                    actividades: ACTIVIDADES
                };
            }

          
            render(){
                return(
                    <ScrollView>
                        <RenderItem item={this.state.quienessomos[0]} />           
                        <FlatList
                            data={this.state.actividades}
                            renderItem={({item}) => <RenderItem item={item} />}
                            keyExtractor={item => item.id.toString()}
                            scrollEnabled={false}
                        />    
                    </ScrollView>   

                );
            }


}


export default QuienesSomos;