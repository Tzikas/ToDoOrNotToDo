import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Store from "../context";
import AddTodo from "../components/AddTodo";

Enzyme.configure({ adapter: new Adapter() });

test("<TodoForm /> #addTodo", async () => {
  const dispatch = jest.fn();
  const form = mount(
    <Store.Provider value={{ dispatch }}>
      <AddTodo />
    </Store.Provider>
  );

  form.find("input").simulate("change", { target: { value: "a new todo" } });
  form.find("button").simulate("click");

  expect(dispatch).toBeCalledWith({ type: "ADD_TODO", payload: "a new todo" });
});
