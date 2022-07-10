/**
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import CardComponenet from "../src/components/utility/Card.vue";

describe("Card Component", () => {
  it("should render the card component without clear button", () => {
    const wrapper = mount(CardComponenet, {
      propsData: {
        title: "Card Title",
        clearButton: false,
      },
    });
    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.find("button").exists()).toBeFalsy();
  });

  it("should render the card component without clear button", () => {
    // give title prop to the card component
    const wrapper = mount(CardComponenet, {
      propsData: {
        title: "Card Title",
        clearButton: true,
      },
    });

    expect(wrapper.find("h2").exists()).toBeTruthy();
    expect(wrapper.find("button").exists()).toBeTruthy();
  });
});
