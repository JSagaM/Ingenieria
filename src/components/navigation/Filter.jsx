import '../../index.css';

export function Filter() {
    return (
        <>
            <select className="md:px-[20px] px-[10px] py-[5px] text-[14px] font-main font-light  outline-none border-solid border-[0.5px] border-custom-blue border-opacity-50 rounded-[20px]" id="filter">
                <option value="all">All</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
            </select>
        </>
    )
}