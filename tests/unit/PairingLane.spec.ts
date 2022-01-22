import { expect } from "chai";
import { mount } from "@vue/test-utils";
import PairingLane from "@/components/PairingLane.vue";
import Person from "@/components/Person.vue";
import { User } from "@/models/User";
import { Task } from "@/models/Task";

describe("PairingLane.vue", () => {
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
    const wrapper = mount(PairingLane, {
      props: { tasks },
    });
    expect(wrapper.findAllComponents(Task)).lengthOf(2);
    const text = wrapper.text();
    expect(text).to.contain(description1);
    expect(text).to.contain(description2);
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
    const wrapper = mount(PairingLane, {
      props: { users },
    });
    expect(wrapper.findAllComponents(Person)).lengthOf(2);
    const text = wrapper.text();
    expect(text).to.contain(name1);
    expect(text).to.contain(name2);
  });
});
