import React from 'react';

export const ResultPage: React.FC = () => {
	const count = 0;

	// TODO: 검색 기능 추가 2023.04.01 kbc
	return (
		<div className="flex flex-1 flex-col">
			{count ? (
				<>
					<p className="mt-4 mb-16 text-light-text-1 dark:text-dark-text-1">
						총 <strong>{count}개</strong>의 포스트를 찾았습니다.
					</p>

					<div className="flex flex-1 bg-magenta" />
				</>
			) : null}
		</div>
	);
};
