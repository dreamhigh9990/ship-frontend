import React, {useState, useEffect} from 'react';
import { CardBody, TabPane } from "reactstrap";
import TableContainer from "../../../../Components/Common/TableContainer";
import { getFindBrowseHistoriesById, getAuthenticatedUser } from '../../../../helpers/fakebackend_helper';

import { Link } from "react-router-dom";
import { columnsData, dataList } from './TestData'
import { useMemo } from "react";



const ImgSelect = ({src}) => {
    const [image_purchase, setimage_purchase] = useState('img-no-buy img-no-buy-x');
    
    function tog_large(e) {
        if(image_purchase === 'img-no-buy') {
            console.log("xxxxxxxxx")
            setimage_purchase('img-buy');
            
        } else {
            setimage_purchase('img-no-buy');
        }        
        console.log("image_purchase", image_purchase);
    }

    return(
        <img className={"img-thumbnail rounded-circle avatar-xl "+ image_purchase} alt="200x200" src={src} onClick={(e)=> tog_large(e)} />
    )
    
}

export  default ImgSelect