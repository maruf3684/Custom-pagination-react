import React, { useEffect, useState } from "react";
import Paginate from "./components/Paginate";
import People from "./utils/People";

const App = () => {
	const [people, usePeople] = useState(People);
	const [totallength, setTotalLength] = useState(people.length);
	const [activePage, setActivePage] = useState(1);
	const [data, setdata] = useState(
		people.slice((activePage - 1) * 10, activePage * 10)
	);

	const paginationmaker = () => {
		const totalPageCount = Math.ceil(totallength / 10);
		const siblingcount = 1;
		const pageWillShown = 5 + siblingcount * 2;
		const PaginationRange = (start, end) => {
			let arr = [];
			while (start <= end) {
				arr.push(start);
				start++;
			}

			return arr;
		};

		//case-1 total page paginationWilshown theke kom hole

		if (totalPageCount <= pageWillShown) {
			return PaginationRange(1, totalPageCount);
		}

		if (totalPageCount > pageWillShown) {
			//firls page and lastpage
			const firstPage = 1;
			const lastPage = totalPageCount;

			//calculating left and right sibling index
			let leftSiblingIndex = Math.max(activePage - siblingcount, 1);
			let rightSiblingIndex = Math.min(
				activePage + siblingcount,
				totalPageCount
			);

			//left and right dot kokhon dakhabo
			let ShouldShowleftDots = leftSiblingIndex > 2;
			let ShouldShowRightDots = rightSiblingIndex < totalPageCount - 1;

			//case-2 right dot dakhabe
			if (!ShouldShowleftDots && ShouldShowRightDots) {
				let leftItemCount = 3 + 2 * siblingcount;
				let leftRange = PaginationRange(1, leftItemCount);

				return [...leftRange, "...", lastPage];
			}

			if (ShouldShowleftDots && !ShouldShowRightDots) {
				let rightItemCount = 3 + 2 * siblingcount;
				let rightRange = PaginationRange(
					totalPageCount - rightItemCount + 1,
					totalPageCount
				);
				return [firstPage, "...", ...rightRange];
			}

			if (ShouldShowleftDots && ShouldShowRightDots) {
				let middlerange = PaginationRange(leftSiblingIndex, rightSiblingIndex);
				return [firstPage, "...", ...middlerange, "...", lastPage];
			}
		}
	};

	useEffect(() => {
		setdata(people.slice((activePage - 1) * 10, activePage * 10));
	}, [activePage]);

	return (
		<>
			<div>
				Total people ={totallength} / page willbe= {Math.ceil(totallength / 10)}{" "}
				/ activePage={activePage}
			</div>
			<div>
				{data.map((person, index) => {
					return <div key={index}>{person}</div>;
				})}
			</div>
			<h1>Paginage</h1>

			{paginationmaker().map((page, index) => {
				if (page === "...") {
					return (
						<button disabled key={index}>
							{page}
						</button>
					);
				}
				return (
					<button
						onClick={(e) => {
							setActivePage((prev) => {
								return page;
							});
						}}
						key={index}
					>
						{page}
					</button>
				);
			})}
		</>
	);
};

export default App;
