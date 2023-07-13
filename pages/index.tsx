import { FunctionComponent, useState } from "react";
import { withLayout } from "../layouts/Layout";
import { Button, Title, Paragraph, Tag, Rating } from "../components";


const Home: FunctionComponent = () => {
    const [rating, setRating] = useState(4);

      return (
            <>
                  <Title tag="h1">Заголовок H1</Title>
                  <Title tag="h2">Заголовок H2</Title>
                  <Title tag="h3">Заголовок H3</Title>
                  <div>
                        <Paragraph size="l">Какой-то большой параграф</Paragraph>
                        <Paragraph size="m">Какой-то средний параграф</Paragraph>
                        <Paragraph size="s">Какой-то маленький параграф</Paragraph>
                  </div>
                  <div>
                        <Tag>Default</Tag>
                        <Tag color="red">Red</Tag>
                        <Tag color="green">Green</Tag>
                        <Tag color="gray">Gray</Tag>
                        <Tag color="primary">Primary</Tag>
                  </div>
                  <div>
                      <Tag size="l">Big Default</Tag>
                      <Tag size="l" color="red">Big Red</Tag>
                      <Tag size="l" color="green">Big Green</Tag>
                      <Tag size="l" color="gray">Big Gray</Tag>
                      <Tag size="l" color="primary">Big Primary</Tag>
                  </div>
                  <div>
                      <Tag href="https://google.com">link</Tag>
                      <Tag href="https://google.com" color="red">link Red</Tag>
                      <Tag href="https://google.com" color="green">link Green</Tag>
                      <Tag href="https://google.com" color="gray">link Gray</Tag>
                      <Tag href="https://google.com" color="primary">link Primary</Tag>
                  </div>
                  <div>
                        <Button appearance="primary">Кнопка</Button>
                        <Button appearance="ghost" arrow="right">Кнопка</Button>
                  </div>
                <Rating rating={4} />
                <Rating isEditable rating={rating} setRating={setRating} />
            </>
      )
}

export default withLayout(Home);
