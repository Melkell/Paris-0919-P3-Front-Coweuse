import React from 'react'
import moment from 'moment'
import ReactAgendaCtrl from './reactAgendaCtrl'
import ReactAgenda from './reactAgenda'
import { guid, getUnique, getLast, getFirst, Modal } from 'react-agenda';

import axios from 'axios'

import './Agenda.css'
import './reactAgenda'

require('moment/locale/fr.js'); // this is important for traduction purpose

var colors = {
	'color-1': "rgba(46,167,65,1)",
	"color-2": "rgba(152,212,37,1)",
	"color-3": "rgba(232,232,232,1)"
}

var now = new Date();

var items = [
	/*{
		_id: guid(),
		name: 'Meeting , dev staff!',
		startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0),
		endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0),
		classes: 'color-1',
		test: 'test'
	},
	{
		_id: guid(),
		name: 'Working lunch , Holly',
		startDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 11, 0),
		endDateTime: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 13, 0),
		classes: 'color-2 color-3'
	}*/
];

export default class Agenda extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [],
			selected: [],
			cellHeight: (60 / 4),
			showModal: this.props.test,
			locale: "fr",
			rowsPerHour: 1,
			numberOfDays: 7,
			startDate: new Date(),
			mission: null
		}
		this.handleRangeSelection = this.handleRangeSelection.bind(this)
		this.handleItemEdit = this.handleItemEdit.bind(this)
		this.zoomIn = this.zoomIn.bind(this)
		this.zoomOut = this.zoomOut.bind(this)
		this._openModal = this._openModal.bind(this)
		this._closeModal = this._closeModal.bind(this)
		this.addNewEvent = this.addNewEvent.bind(this)
		this.removeEvent = this.removeEvent.bind(this)
		this.editEvent = this.editEvent.bind(this)
		this.changeView = this.changeView.bind(this)
		this.handleCellSelection = this.handleCellSelection.bind(this)
		this.handleTool = this.handleTool.bind(this)
	}

	componentDidMount() {
		axios.get(`http://localhost:4000/api/dashboard/mission/:id`)
			.then((result) => result.data.map(item => items.push(new Object({ _id: item.id, name: item.name, startDateTime: new Date(item.start_date), endDateTime: new Date(item.end_date), classes: 'color-3' }))))
		this.setState({ items: items })
		this.props.missions.find(mission => mission.id === this.props.selected)
		console.log(items)
	}

	componentDidUpdate(prevProps) {
		// Utilisation classique (pensez bien à comparer les props) :
		if (this.props.addMission !== prevProps.addMission) {
			this._openModal()
		}
	}

	componentWillReceiveProps(next, last) {
		if (next.items) {
			this.setState({ items: next.items })
		}
	}

	handleItemEdit(item, openModal) {
		if (item && openModal === true) {
			this.setState({ selected: [item] })
			return this._openModal();
		}
	}

	handleCellSelection(item, openModal) {
		if (this.state.selected && this.state.selected[0] === item) {
			return this._openModal();
		}
		this.setState({ selected: [item] })
	}

	zoomIn() {
		var num = this.state.cellHeight + 15
		this.setState({ cellHeight: num })
	}

	zoomOut() {
		var num = this.state.cellHeight - 15
		this.setState({ cellHeight: num })
	}

	handleDateRangeChange(startDate, endDate) {
		this.setState({ startDate: startDate })
	}

	handleRangeSelection(selected) {
		this.setState({ selected: selected, showCtrl: true })
		this._openModal();
	}

	_openModal() {
		this.setState({ showModal: true })
	}

	_closeModal(e) {
		if (e) {
			e.stopPropagation();
			e.preventDefault();
		}
		this.setState({ showModal: false })
	}

	handleItemChange(items, item) {
		this.setState({ items: items })
	}

	handleItemSize(items, item) {
		this.setState({ items: items })
	}

	removeEvent(items, item) {
		this.setState({ items: items });
	}

	addNewEvent(items, newItems) {
		this.setState({ showModal: false, selected: [], items: items });
		this._closeModal();
	}

	editEvent(items, item) {
		this.setState({ showModal: false, selected: [], items: items });
		this._closeModal();
	}

	changeView(days, event) {
		this.setState({ numberOfDays: days })
	}

	handleTool(tool) {
		this.setState({ tool: tool })
	}

	render() {
		var AgendaItem = function (props) {
			return <div style={{ display: 'block', position: 'absolute', background: '#FFF' }}>{props.item.name} <button onClick={() => props.edit(props.item)}>Edit </button></div>
		}
		return (
			<div className="content-expanded ">
				<div className="control-buttons">
					{/*
						<button className="button-control" onClick={this.zoomIn}> <i className="zoom-plus-icon"></i> </button>
						<button className="button-control" onClick={this.zoomOut}> <i className="zoom-minus-icon"></i> </button>
						<button className="button-control" onClick={this.changeView.bind(null, 7)}> {moment.duration(7, "days").humanize()}  </button>
						<button className="button-control" onClick={this.changeView.bind(null, 4)}> {moment.duration(4, "days").humanize()}  </button>
						<button className="button-control" onClick={this.changeView.bind(null, 3)}> {moment.duration(3, "days").humanize()}  </button>
						<button className="button-control" onClick={this.changeView.bind(null, 1)}> {moment.duration(1, "day").humanize()} </button>
						<button className="button-control" onClick={this._openModal}> <i className="schedule-icon"> + </i> </button>
					*/}
				</div>

				<ReactAgenda
					className="ReactAgenda"
					minDate={new Date(now.getFullYear(), now.getMonth() - 3)}
					maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
					startDate={this.state.startDate}
					startAtTime={8}
					endAtTime={23}
					cellHeight={this.state.cellHeight}
					locale="fr"
					items={this.state.items}
					numberOfDays={this.state.numberOfDays}
					headFormat={"ddd DD MMM"}
					rowsPerHour={this.state.rowsPerHour}
					itemColors={colors}
					helper={true}
					tool={this.state.tool}
					//itemComponent={AgendaItem}
					view="calendar"
					autoScale={false}
					fixedHeader={true}
					onRangeSelection={this.handleRangeSelection.bind(this)}
					onChangeEvent={this.handleItemChange.bind(this)}
					onChangeDuration={this.handleItemSize.bind(this)}
					onItemEdit={this.handleItemEdit.bind(this)}
					onCellSelect={this.handleCellSelection.bind(this)}
					onItemRemove={this.removeEvent.bind(this)}
					onDateRangeChange={this.handleDateRangeChange.bind(this)} />
				{
					this.state.showModal ? <Modal clickOutside={this._closeModal} >
						<div className="modal-content">
							<ReactAgendaCtrl items={this.state.items} itemColors={colors} selectedCells={this.state.selected} Addnew={this.addNewEvent} edit={this.editEvent} new={this.props.missions.find(mission => mission.id === this.props.selected)} delMission={this.props.delMission}/>
						</div>
					</Modal> : ''
				}
			</div>
		);
	}
}