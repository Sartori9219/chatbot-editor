import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
} from "@material-tailwind/react";
import { useComponent, useDraw, useTest } from "../../store";
import Header from "../basic/testPanel/header";
import Body from "../basic/testPanel/body";
import Footer from "../basic/testPanel/footer";

export default function TestPanel() {
  const [load, setLoad] = useState(false);
  const isTest = useTest(state => state.isTest);
  const allTest = useTest(state => state.allTest);

  const endTest = useTest(state => state.endTest);
  const setAllTest = useTest(state => state.setAllTest);
  return (
    <>
      <div className={`w-96 sm:w-[500px] lg:w-[800px] h-4/5 absolute top-20 right-1/2 transform translate-x-1/2 z-30 ${isTest ? '' : 'hidden'}`}>
        <Card className="h-full bg-gray-400">
          <Header endTest={endTest} setAllTest={setAllTest} />
          <CardBody>
            {
              allTest.length &&
              allTest.map((test, index) => {
                return (
                  <Body key={index} test={test} setLoad={setLoad} load={load} />
                )
              })
            }
          </CardBody>
          <Footer />
        </Card>
      </div >

    </>
  )
}