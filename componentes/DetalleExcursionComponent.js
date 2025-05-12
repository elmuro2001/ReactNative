import React, { Component } from 'react';
import { Text, View } from 'react-native';
<<<<<<< HEAD
import { Card } from '@rneui/themed';
import { EXCURSIONES } from '../comun/excursiones';
=======
import { Card,Icon } from '@rneui/themed';
import { EXCURSIONES } from '../comun/excursiones';
import { COMENTARIOS } from '../comun/comentarios';
import { ScrollView } from 'react-native-gesture-handler';


>>>>>>> ca0ce5f (Botones o Iconos)

function RenderExcursion(props) {

    const excursion = props.excursion;
    
<<<<<<< HEAD
=======

>>>>>>> ca0ce5f (Botones o Iconos)
        if (excursion != null) {
            return(
            <Card>
              <Card.Title>{excursion.nombre}</Card.Title>
              <Card.Divider/>
              <Card.Image source={require('./imagenes/40Años.png')}></Card.Image>
              <Text style={{margin: 20}}>
                {excursion.descripcion}
              </Text>
<<<<<<< HEAD
            </Card>
            );
        }
=======
              <Icon 
                    raised 
                    reverse 
                    name={ props.favorita ? 'heart' : 'heart-o'} 
                    type='font-awesome' 
                    color='#f50' 
                    onPress={() => props.favorita ? console.log('La excur sión ya se encuentra entre las favoritas') : props.onPress()} 
                />
            </Card>
            
            );
        }

>>>>>>> ca0ce5f (Botones o Iconos)
        else {
            return(<View></View>);
        }
}

<<<<<<< HEAD
=======
function RenderComentario(props) { 
    const comentarios = props.comentarios; 
    return ( 
    <Card> 
    <Card.Title>Comentarios</Card.Title> 
    <Card.Divider/> 
        <Text style={{margin: 20}}>
            {comentarios.map((comentario) => { 
                return( 
                    <View key={comentario.id}> 
                        <Text style={{fontSize: 14}}>{comentario.comentario}</Text> 
                        <Text style={{fontSize: 12}}>Valoración: {comentario.valoracion} estrellas</Text>
                        <Text style={{fontSize: 12}}>{comentario.autor} , {comentario.dia+"\n"}</Text> 
                    </View>
                ); 
            })}
        </Text>
    </Card> 
    ); 
}


>>>>>>> ca0ce5f (Botones o Iconos)
class DetalleExcursion extends Component {
        constructor(props) {
            super(props);
            this.state = {
<<<<<<< HEAD
                excursiones: EXCURSIONES
            };
        }
      
        render(){
            const {excursionId} = this.props.route.params;
            return(<RenderExcursion excursion={this.state.excursiones[+excursionId]} />);
=======
                excursiones: EXCURSIONES,
                comentarios: COMENTARIOS,
                favoritos: []
            };
        }

        marcarFavorito(excursionId) { 
            this.setState({favoritos: this.state.favoritos.concat(excursionId)}); 
        }


      
        render(){
            const {excursionId} = this.props.route.params;


            return(
            <ScrollView>
                <RenderExcursion
                    excursion={this.state.excursiones[+excursionId]}
                    favorita={this.state.favoritos.some(el => el === excursionId)} 
                    onPress={() => this.marcarFavorito(excursionId)}
                />
                <RenderComentario comentarios={this.state.comentarios.filter((comentario) => comentario.excursionId === excursionId)} />
            </ScrollView>
        );

>>>>>>> ca0ce5f (Botones o Iconos)
        }
}

export default DetalleExcursion;