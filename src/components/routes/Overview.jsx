import { CourseProgress } from "../overview/CourseProgress";
import { TaskDone } from "../overview/TaskDone";
import { Sidebar } from "../navigation/Sidebar";
import { Filter } from "../navigation/Filter";
import { Search } from "../navigation/Search";

export function Overview() {
  return (
    <>
      <Sidebar username="Freddy Garro" />
      <div className="text-custom-dark grid mx-4 lg:ml-[20rem]">
        <section className="mb-5 max-lg:mt-28">
          <h1 className="text-custom-dark font-secondary font-black text-[40px]">
            Overview
          </h1>
          <div className="flex justify-between items-center my-6">
            <Filter />
            <Search />
          </div>
          <div className="grid gap-6 minmax-200">
            <CourseProgress
              courseName="Web Development"
              tasksDone={5}
              tasksTotal={10}
            />
            <CourseProgress
              courseName="Web Designing"
              tasksDone={7}
              tasksTotal={8}
            />
            <CourseProgress
              courseName="Audio and Video Manipulation"
              tasksDone={2}
              tasksTotal={5}
            />
            <CourseProgress
              courseName="App Engineering"
              tasksDone={12}
              tasksTotal={12}
            />
          </div>
        </section>

        <section className="mb-5">
          <h1 className="text-2xl font-main font-bold mt-8 mb-4">
            Completed Today
          </h1>
          <div className="flex flex-wrap gap-6">
            <TaskDone
              title="React Homework"
              date="16 May, 2024"
              category="Homework"
            />
            <TaskDone
              title="Tailwind Homework"
              date="16 May, 2024"
              category="Homework"
            />
            <TaskDone
              title="Project Meeting"
              date="16 May, 2024"
              category="Project"
            />
          </div>
        </section>

        <section className="mb-5">
          <h1 className="text-2xl font-main font-bold mt-8 mb-4">
            Completed in the Week
          </h1>
          <div className="flex flex-wrap gap-6">
            <TaskDone
              title="React Homework"
              date="16 May, 2024"
              category="Homework"
            />
            <TaskDone
              title="Tailwind Homework"
              date="16 May, 2024"
              category="Homework"
            />
            <TaskDone
              title="Project Meeting"
              date="16 May, 2024"
              category="Meeting"
            />
            <TaskDone
              title="Tailwind Homework"
              date="16 May, 2024"
              category="Homework"
            />
            <TaskDone
              title="Project Meeting"
              date="16 May, 2024"
              category="Meeting"
            />
          </div>
        </section>
      </div>
    </>
  );
}
