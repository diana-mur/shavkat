import React from 'react'

const VizCard = (props) => {
    let { bg_vizcard, card_viz_titl, card_viz_price } = props
    return (
        <div className="card_viz" style={{ background: `url(${bg_vizcard})`}}>
            <p className="card_viz_title">{card_viz_titl}</p>
            <p className="card_viz_price">{card_viz_price}</p>
        </div>
    )
}

export default VizCard