export function Input() {
    return (
        <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-bold text-[var(--Blue-800)] mb-2">Email address</label>
            <input type="text" id="email" placeholder="email@company.com" className="border border-[var(--Gray)] rounded-lg h-16 px-6" />
        </div>
    )
}