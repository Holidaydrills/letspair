import { expect } from "chai";
import { mount, shallowMount } from "@vue/test-utils";
import SidebarLeft from "@/components/SidebarLeft.vue";
import PairingUser from "@/components/PairingUser.vue";
import PairingTask from "@/components/PairingTask.vue";
import PairingBoard from "@/components/PairingBoard.vue";
import { Task } from "@/models/Task";
import { key } from "@/store";
import { createStore } from "vuex";
import { options } from "@/store/storeConfig";

describe("SidebarLeft.vue", () => {
  it("renders two sections, one for Tasks and one for users", () => {
    const store = createStore(options);
    const wrapper = shallowMount(SidebarLeft, {
      global: {
        plugins: [[store, key]],
      },
    });
    const text = wrapper.text();
    expect(text).to.contain("Users");
    expect(text).to.contain("Tasks");
  });

  it("renders users correctly", async () => {
    const name1 = "Luka";
    const name2 = "Bento";
    const storeOptions = options;
    storeOptions.state = () => {
      return {
        users: [
          {
            id: "1",
            name: name1,
          },
          {
            id: "1",
            name: name2,
          },
        ],
        tasks: [],
      };
    };
    const store = createStore(storeOptions);
    const wrapper = mount(SidebarLeft, {
      global: {
        plugins: [[store, key]],
      },
    });
    expect(wrapper.findAllComponents(PairingUser)).lengthOf(2);
    const text = wrapper.text();
    expect(text).to.contain(name1);
    expect(text).to.contain(name2);
  });

  it("renders props.tasks when passed", () => {
    const description1 = "Important task";
    const description2 = "Very important task";
    const storeOptions = options;
    storeOptions.state = () => {
      return {
        users: [],
        tasks: [
          {
            id: "1",
            description: description1,
          },
          {
            id: "1",
            description: description2,
          },
        ],
      };
    };
    const store = createStore(storeOptions);
    const wrapper = mount(SidebarLeft, {
      global: {
        plugins: [[store, key]],
      },
    });
    expect(wrapper.findAllComponents(PairingTask)).lengthOf(2);
    const text = wrapper.text();
    expect(text).to.contain(description1);
    expect(text).to.contain(description2);
  });
});
