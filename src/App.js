import React from 'react';
import { useSelector } from 'react-redux'
import {useDispatch} from "react-redux";
import {Layout,PageHeader,Button,Card,Skeleton} from "antd";
import {requestImageAC} from "./redux/actions";

const App = () => {

    const data = useSelector(state => state.data)
    const dispatch = useDispatch()

    const { Meta } = Card

    const handlerGetCatImage = () => {
        dispatch(requestImageAC())
    }

  return (
    <Layout>
        <div>
            <PageHeader>Cats</PageHeader>
            <Button type={"primary"} onClick={handlerGetCatImage}>Get image</Button>
        </div>
        <div>
            {data ?
                <Card
                    hoverable
                    style={{width: 240}}
                    cover={<img alt="example" src={data.url} style={{width: '10vw'}}/>}
                >
                    <Meta title="Cats API" description="https://thecatapi.com/"/>
                </Card> :
                <Card
                    hoverable
                    style={{width: 240}}
                    cover={<Skeleton.Image style={{width: '10vw'}}/>}
                >
                </Card>
            }
        </div>
    </Layout>
  );
}

export default App;
