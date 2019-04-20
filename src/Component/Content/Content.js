import React, { Component } from 'react';

export default class Content extends Component {
	    constructor(props) {
	        super(props);

          this.state = {
            trangThai:0
          }
	    }
	    
      thongbao = () => {
        alert("cach xu ly tuong tac trong reactjs");
      }

      // thongbao2 = () => {
      //   window.confirm("ban co muon xoa ko ?");
      // }

      // thongbao3 = (x) => {
      //   window.confirm(x);
      // }


      
     
      renderButton = () => (
          <div className="row">
            <div className="btn btn-group">
              <div className="btn btn-info" onClick={()=>this.editClick()}>Edit</div>
              <div className="btn btn-warning">Remove</div>
            </div>
            <hr />
          </div>
      )

      renderForm = () => (
          <div className="row">
            <div className="form-group">
              <input  defaultValue={this.props.tieude} className="form-control" type="text" placeholder="change text" />      
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-danger"  onClick={()=>this.saveClick()}>Save</button>
            </div>
          </div>
      )


      renderCheck = () => {
        if (this.state.trangThai === 0) {
            return this.renderButton();
        } 
        else {
            return this.renderForm();
        }
      }

      editClick = () => {
        this.setState({trangThai:1});
      }
      saveClick = () => {
        this.setState({trangThai:0});
      }

    
	
	render() {
		return (
          <div className="col-lg-4">
            <div className="row">
              <div className={"col-lg-5"}>
                <div className="p-1">
                  <img className="img-fluid rounded-circle" src={this.props.anh} alt />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="p-1">
                  <h2 className="display-6">{this.props.tieude}</h2>
                  <p>{this.props.trichdan}</p>
                  
                   {this.renderCheck()}
                </div>
              </div>
            </div>
          </div>
		);
	}
}