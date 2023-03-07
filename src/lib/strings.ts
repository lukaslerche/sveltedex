function cap(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function id(resourceUrl: string | undefined): number {
	if (resourceUrl == undefined) return NaN;
	const regex = /\/(\d+)\/$/;
	const result = resourceUrl.match(regex);
	return result ? +result[1] : NaN;
}

export { cap, id };
