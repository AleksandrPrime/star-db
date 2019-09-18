import React, {Component} from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import {SwapiServiceProvider} from "../swapi-service-context";

import ErrorIndicator from '../error-indicator';

import { SwapiService } from "../../services/swapi-service";
import { DummySwapiService } from '../../services/dummy-swapi-service';
import './app.css';

import ErrorBoundry from "../error-boundry";
import { PeoplePage, PlanetsPage, StarshipPage } from '../pages'


export default class App extends Component {

    state = {
        swapiService: new SwapiService(),
        hasError: false
    };

    onServiceChange = () => {
        this.setState(({ swapiService}) => {

            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;

            return {
                swapiService: new Service()
            }
        });
    };


    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }


        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>

                        <RandomPlanet />

                        <PeoplePage />

                        <PlanetsPage />

                        <StarshipPage />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}