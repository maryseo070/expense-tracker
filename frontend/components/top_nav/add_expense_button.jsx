import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay: {
    backgroundColor       : 'rgba(0,0,0,0.7)',
    position              : 'fixed',
    top                   : 0,
    left                  : 0,
    right                 : 0,
    bottom                : 0,
    border                : 'none'
  },
  content : {
    position              : 'absolute',
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    overflow              : 'auto',
    backgroundColor       : 'white'
  },
};

Modal.setAppElement(document.getElementById('root'));

class AddExpenseButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalIsOpen: false,
      imgUrl: "",
      imgIdx: 0,
      form: {
        amount: "",
        description: "",
        date: "",
        category_id: ""
      }
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
  }

  openModal(url, idx) {
  this.setState({modalIsOpen: true, imgUrl: url, imgIdx: idx});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  handleSubmit() {
    debugger
    this.props.createExpense(this.state.form);
  }

  updateCategory() {
    let formData = Object.assign({}, this.state.form);

    return (e) => {
      formData["category_id"] = e.target.value;
      this.setState({form: formData});
    };
  }

  updateField(field) {
    let formData = Object.assign({}, this.state.form);

    return (e) => {
      formData[field] = e.target.value;
      this.setState({form: formData});
    };
  }

  render() {

    let categories = Object.values(this.props.categories);
    categories = categories.map( (c, i) => {
      return (
        <option value={c.id} key={i}>{c.name}</option>
      );
    });
    return (
      <div className="modal-all">
        <div className="show-buttons">
          <button onClick={() => this.openModal()} className="add-expense-button"> Add Expense</button>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          ariaHideApp={false}
          aria={{
            labelledby: "heading",
            describedby: "full_description"
           }}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          className="login-modal-all"
        >

        <button className="modal-close-button" onClick={this.closeModal}>Close</button>

           <form onSubmit={this.handleSubmit} className="modal-inner-session-form">
             <input
               type="text"
               placeholder="Amount $"
               value={this.state.amount}
               onChange={this.updateField("amount")}/>
             <input
               type="textarea"
               placeholder="Description"
               value={this.state.description}
               onChange={this.updateField("description")}
               />
             <input
               type="date"
               value={this.state.description}
               onChange={this.updateField("date")}/>
             <select
               onChange={this.updateCategory()}>
               {categories}
             </select>

           <input type="submit" />
           </form>

        </Modal>
      </div>
    );
  }
}

export default AddExpenseButton;
