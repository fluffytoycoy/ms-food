import React, {useState} from 'react';
import LinkDuo from '../../../Utils/LinkDuo/LinkDuo'

function FlexItems(props){
    const [active, setActive] = useState(false);
    const backgroundStyle={
      background: props.item.img ? `url(${props.item.img})` : '#1f1f1f',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100%',
      top: 0,
      left: 0,
      position: 'absolute',
      width: '100%',
      zIndex: '-1'
    }

    const enter = (e) =>{
      setActive(true);
    }

    const exit = (e)=>{
      setActive(false);
    }

    return (
        <div className={`grid-item ${active ? 'active' : ''}`} to={props.item.to}>
          <div>
            <div className="square">
              <h3>{props.item.title}</h3>
            </div>
          </div>
          <div className="description" dangerouslySetInnerHTML={{ __html: props.item.subText}}>

          </div>
          <LinkDuo onMouseEnter={enter} onMouseLeave={exit} to={props.item.href} className="grid-btn">
                <div>
                  <p>{props.item.btnText}</p>
                </div>
                <div>
                  <img alt="up arrow"src="/img/Icons/right-arrow.svg"/>
                </div>
            </LinkDuo>
          <span style={backgroundStyle}>
          </span>
        </div>
    )
  }


export default FlexItems;
