import React from "react";
import './demo.scss'

class Children extends React.Component{
    state = {
        arrShow:false
    }
    handleOnClick = () => {
        this.setState({
            arrShow: !this.state.arrShow
        })
    }
    handleDelete = (Job) => {
        this.props.jobDelete(Job)
    }
    render(){
     
        // let ten = this.props.name
        // let tuoi = this.props.age
        let {list} = this.props;
        let {arrShow} = this.state;
        // let check = arrShow === true ? 'arrShow = true' : 'arrShow = false';
        
        return(
            <>
                {/* {arrShow === false && */}
                {arrShow === false ?
                    <div>
                        <button className="bt"
                            onClick={() => this.handleOnClick()}>
                            Show
                        </button>
                    </div>
                // }
                // {arrShow === true &&
                :
                    <>
                        <div className="test list">
                            {
                                list.map((item,index) =>{
                                    return(
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></>
                                            <span onClick={() => this.handleDelete(item)}>x</span>
                                        </div>
                                    )
                                })}
                            </div>
                        <div>
                            <button className="bt"
                                onClick={() => this.handleOnClick()}>
                                Hide
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }
}
export default Children