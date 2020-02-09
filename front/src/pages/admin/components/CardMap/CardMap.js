import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import {Location,Link,Wrapper} from './CardMapStyled';
import marker from '../../../../assets/icons/map-marker.svg'



class SimpleMap extends React.Component {
    render() {
        return (
            <Wrapper>
                <Link>{this.props.link}</Link>
                <Location>
                    <div style={{height: '100vh', width: '100%'}}>
                        <Map
                            google={this.props.google}
                            zoom={14} initialCenter={{
                            lat: 42.30,
                            lng: -72.52
                        }}
                        >
                            <Marker
                                name={'Current location'}
                                icon={{
                                    url: marker,
                                    scaledSize:  this.props.google.maps.Size(2,2)
                                }}
                                position={{
                                    lat: 42.30,
                                    lng: -72.52
                                }}/>
                        </Map>
                    </div>
                </Location>
            </Wrapper>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBVxLMFVMm26mJgqr3axzU2kpclBkceAqk"
})(SimpleMap)






