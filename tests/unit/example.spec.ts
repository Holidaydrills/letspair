import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import SidebarLeft from "@/components/SidebarLeft.vue";
import Person from "@/components/Person.vue";
import { User } from "@/models/User";

describe("SidebarLeft.vue", () => {
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
    const wrapper = shallowMount(SidebarLeft, {
      props: { users },
    });
    // const text = wrapper.text();
    // expect(text).to.contain(name1);
    // expect(text).to.contain(name2);
    expect(wrapper.findAllComponents(Person)).lengthOf(2);
  });
});
