function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 d-flex justify-content-center' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "40rem", minWidth: "30rem"}}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div className="card-footer text-bg-danger mt-2" id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
};
export default Card;
