import {Component} from "react";
import SeminaryForm from "../forms/seminary.form";
import RestaurantForm from "../forms/restaurant.form";
import MotelForm from "../forms/motel.form";
import * as React from "react";
import {NextPageContext} from "next";

interface TabsProps {

}

export default class AvailabilitiesPartial extends Component<TabsProps> {

    render() {
        return (
            <div className="mre-availabilities-container">
                <div className="mre-availabilities-row">
                    <div className="mre-availabilities-tabs">
                        <nav onClick={this.onClickTabItem}>
                            <button key={'motel'}>Motel</button>
                            <button key={'restaurant'}>Restaurant</button>
                            <button key={'seminary'}>Seminary</button>
                        </nav>
                        <div className="mre-availabilities-tabs-content">
                            <div className="mre-availabilities-tab-pane">
                                <MotelForm/>
                            </div>
                            <div className="mre-availabilities-tab-pane">
                                <RestaurantForm/>
                            </div>
                            <div className="mre-availabilities-tab-pane">
                                <SeminaryForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    onClickTabItem = (tab) => {
        this.setState({ selected: tab.target });
    }
}
