const transactions = [
	{ id: "tx-1", van: "Modest Explorer", date: "Aug 12", amount: 720 },
	{ id: "tx-2", van: "Beach Bum", date: "Aug 8", amount: 560 },
	{ id: "tx-3", van: "Green Wonder", date: "Aug 2", amount: 980 },
];

const monthlyIncome = [
	{ month: "Mar", amount: 900 },
	{ month: "Apr", amount: 1320 },
	{ month: "May", amount: 1180 },
	{ month: "Jun", amount: 1640 },
	{ month: "Jul", amount: 2080 },
	{ month: "Aug", amount: 2260 },
];

export default function IncomePage() {
	const totalIncome = transactions.reduce(
		(total, transaction) => total + transaction.amount,
		0,
	);
	const highestIncome = Math.max(...monthlyIncome.map((item) => item.amount));

	return (
		<section>
			<div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
				<div>
					<p className="mb-4 font-semibold text-clay text-sm uppercase tracking-widest">
						Host income
					</p>
					<h1 className="text-balance font-black text-4xl text-ink leading-tight md:text-5xl">
						Income overview.
					</h1>
				</div>
				<p className="font-medium text-muted">Last 30 days</p>
			</div>

			<div className="grid gap-6 lg:grid-cols-3">
				<section
					aria-labelledby="income-total"
					className="rounded-xl bg-surface p-6 shadow-sm lg:col-span-2"
				>
					<p className="font-semibold text-muted text-sm">Total income</p>
					<h2 id="income-total" className="mt-3 font-black text-5xl text-ink">
						${totalIncome.toLocaleString()}
					</h2>

					<div className="mt-10 flex h-48 items-end gap-3">
						{monthlyIncome.map((item) => (
							<div
								key={item.month}
								className="flex flex-1 flex-col items-center"
							>
								<div className="flex h-36 w-full items-end rounded-lg bg-panel">
									<div
										className="w-full rounded-lg bg-clay"
										style={{
											height: `${Math.max(
												24,
												(item.amount / highestIncome) * 100,
											)}%`,
										}}
										aria-hidden="true"
									/>
								</div>
								<p className="mt-3 font-semibold text-muted text-sm">
									{item.month}
									<span className="sr-only">: ${item.amount}</span>
								</p>
							</div>
						))}
					</div>
				</section>

				<section aria-labelledby="transactions-title">
					<div className="mb-4 flex items-end justify-between gap-4">
						<h2
							id="transactions-title"
							className="font-black text-2xl text-ink"
						>
							Transactions
						</h2>
						<p className="font-medium text-muted text-sm">
							{transactions.length} paid
						</p>
					</div>

					<div className="grid gap-3">
						{transactions.map((transaction) => (
							<article
								key={transaction.id}
								className="rounded-xl bg-surface p-4 shadow-sm"
							>
								<div className="flex items-start justify-between gap-4">
									<div>
										<h3 className="font-bold text-ink">{transaction.van}</h3>
										<p className="mt-1 font-medium text-muted text-sm">
											{transaction.date}
										</p>
									</div>
									<p className="font-black text-ink text-xl">
										${transaction.amount}
									</p>
								</div>
							</article>
						))}
					</div>
				</section>
			</div>
		</section>
	);
}
