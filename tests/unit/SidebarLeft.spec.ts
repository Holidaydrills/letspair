import { expect } from "chai";
import { mount, shallowMount } from "@vue/test-utils";
import SidebarLeft from "@/components/SidebarLeft.vue";
import PairingUser from "@/components/PairingUser.vue";
import PairingTask from "@/components/PairingTask.vue";
import { User } from "@/models/User";
import { Task } from "@/models/Task";

describe("SidebarLeft.vue", () => {
  it("renders two sections, one for Tasks and one for users", () => {
    const wrapper = shallowMount(SidebarLeft, {});
    const text = wrapper.text();
    expect(text).to.contain("Users");
    expect(text).to.contain("Tasks");
  });

  it("renders props.users when passed", () => {
    const name1 = "Luka";
    const name2 = "Bento";
    const users: Array<User> = [
      {
        id: "1",
        name: name1,
      },
      {
        id: "1",
        name: name2,
      },
    ];
    const wrapper = mount(SidebarLeft, {
      props: { users },
    });
    expect(wrapper.findAllComponents(PairingUser)).lengthOf(2);
    const text = wrapper.text();
    expect(text).to.contain(name1);
    expect(text).to.contain(name2);
  });

  it("renders props.tasks when passed", () => {
    const description1 = "Important task";
    const description2 = "Very important task";
    const tasks: Array<Task> = [
      {
        id: "1",
        description: description1,
      },
      {
        id: "1",
        description: description2,
      },
    ];
    const wrapper = mount(SidebarLeft, {
      props: { tasks },
    });
    expect(wrapper.findAllComponents(PairingTask)).lengthOf(2);
    const text = wrapper.text();
    expect(text).to.contain(description1);
    expect(text).to.contain(description2);
  });
});
