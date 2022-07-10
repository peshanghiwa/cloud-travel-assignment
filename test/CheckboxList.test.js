/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import CardComponenet from "../src/components/utility/CheckboxList.vue";

const dummyData = [
  {
    id: 1,
    title: "Excellent",
    number: 999,
    value: false,
  },
  {
    id: 2,
    title: "Very Good",
    number: 999,
    value: false,
  },
  {
    id: 3,
    title: "Good",
    number: 999,
    value: false,
  },
  {
    id: 4,
    title: "Fair",
    number: 999,
    value: false,
  },
  {
    id: 5,
    title: "Poor",
    number: 999,
    value: false,
  },
  {
    id: 6,
    title: "No Review",
    number: 999,
    value: false,
  },
];

describe("CheckboxList Component", () => {
  it("should render the component with 6 inputs", () => {
    const wrapper = mount(CardComponenet, {
      propsData: {
        uniqueId: "i-am-unique",
        modelValue: dummyData,
      },
    });

    expect(wrapper.findAll(".checkbox-input").length).toBe(6);
  });

  it("should render the component with 3 inputs", () => {
    const wrapper = mount(CardComponenet, {
      propsData: {
        uniqueId: "i-am-unique",
        modelValue: dummyData,
        limit: 3,
      },
    });

    expect(wrapper.findAll(".checkbox-input").length).toBe(3);
  });
});
