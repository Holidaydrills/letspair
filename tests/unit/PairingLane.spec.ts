import { expect } from "chai";
import { mount } from "@vue/test-utils";
import TaskArea from "@/components/TaskArea.vue";
import PairingTask from "@/components/PairingTask.vue";
import { createStore } from "vuex";
import { options } from "@/store/storeConfig";
import { key } from "@/store";

describe("PairingLane.vue", () => {
  it("renders props.tasks when passed", () => {
    const name1 = "Luka";
    const name2 = "Bento";
    const description1 = "Important task";
    const description2 = "Very important task";
    const storeOptions = options;
    storeOptions.state = () => {
      return {
        availableUsers: [],
        unavailableUsers: [],
        lanes: [
          {
            id: "Lane 1",
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
          },
        ],
        openTasks: [],
      };
    };
    const store = createStore(storeOptions);
    const wrapper = mount(TaskArea, {
      global: {
        plugins: [[store, key]],
      },
    });
    expect(wrapper.findAllComponents(PairingTask)).lengthOf(2);
    const text = wrapper.text();
    expect(text).to.contain(name1);
    expect(text).to.contain(name2);
    expect(text).to.contain(description1);
    expect(text).to.contain(description2);
  });

  // it("renders props.users when passed", () => {
  //   const name1 = "Luka";
  //   const name2 = "Bento";
  //   const users: Array<User> = [
  //     {
  //       id: "1",
  //       name: name1,
  //     },
  //     {
  //       id: "1",
  //       name: name2,
  //     },
  //   ];
  //   const wrapper = mount(PairingLane, {
  //     props: { users },
  //   });
  //   expect(wrapper.findAllComponents(PairingUser)).lengthOf(2);
  //   const text = wrapper.text();
  //   expect(text).to.contain(name1);
  //   expect(text).to.contain(name2);
  // });
});
