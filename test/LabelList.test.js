/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import CardComponenet from "../src/components/utility/LabelList.vue";

const dummyData = ["Breakfast", "Lunch", "Dinner", "Snack", "Drink", "Other"];

describe("LabelList Component", () => {
  it("should render the component with 3 labels and a popper component", () => {
    const wrapper = mount(CardComponenet, {
      propsData: {
        list: dummyData,
      },
    });

    // it must show only 3 labels, others will be show by popper
    expect(wrapper.findAll(".label-list").length).toBe(3);
    expect(wrapper.find(".popper").exists()).toBeTruthy();
  });
});
