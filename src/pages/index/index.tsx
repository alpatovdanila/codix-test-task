import React, { useEffect } from "react";
import { Col, Container, Row } from "../../components/grid";
import { Logo } from "../../components/logo";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { ChevronRight } from "../../components/icon";
import { Textarea } from "../../components/textarea";
import { useDispatch, useSelector, useStore } from "react-redux";
import { fetchCars } from "../../store/cars";
import { RootState } from "../../store";
import { DropDown } from "../../components/dropdown";

export const Index = () => {
  const dispatch = useDispatch();
  const cars = useSelector<RootState>((store) => store.cars);
  useEffect(() => {
    dispatch(fetchCars());
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <Logo />
            </Col>
          </Row>
          <Row>
            <Col xs={6}>
              <Input block placeholder={"Название"} />
              <Button block icon={<ChevronRight strokeWidth={5} size={14} />}>
                Test
              </Button>
            </Col>
            <Col xs={6}>
              <Textarea value={"Hello!"} />
              <DropDown
                options={[
                  { label: "В наличии", value: "test" },
                  { label: "Ожидается", value: "test" },
                  { label: "Нет в наличии", value: "test" },
                ]}
                value={"black"}
                onChange={console.log}
              />
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};
