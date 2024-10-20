import React, { useState } from "react";
import {
  ListView,
  ListViewHidden,
  HiddenButton,
  SwipedTodoText,
  TodoText,
  TodoDate,
  colors,
  ListContainer,
} from "../styles/appStyles";
import { SwipeListView } from "react-native-swipe-list-view";
import { Entypo } from "@expo/vector-icons";

const ListItem = ({ todos, setTodos }) => {
  const [swipedRow, setSwipedRow] = useState(null);

  return (
    <ListContainer>
      <SwipeListView
        data={todos}
        renderItem={(data) => {
          const RowText =
            data.item.key == swipedRow ? SwipedTodoText : TodoText;

          return (
            <ListView
              underlayColor={colors.primary}
              onPress={() => {
                
              }}
            >
              <>
                <RowText>{data.item.title}</RowText>
                <TodoDate>{data.item.date}</TodoDate>
              </>
            </ListView>
          );
        }}
        renderHiddenItem={() => {
          return (
            <ListViewHidden>
              <HiddenButton>
                <Entypo name="trash" size={25} color={colors.secondaryy} />
              </HiddenButton>
            </ListViewHidden>
          );
        }}
        leftOpenValue={80}
        previewRowKey={"1"}
        previewOpenValue={80}
        previewOpenDelay={3000}
        disableLeftSwipe={true}
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          paddingBottom: 30,
          marginBottom: 40,
        }}
        onRowOpen={(rowKey) => {
          setSwipedRow(rowKey);  
        }}
        onRowClose={(rowKey) => {
          setSwipedRow(null);  
        }}
      />
    </ListContainer>
  );
};
export default ListItem;
