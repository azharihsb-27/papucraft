const highlightCardSkeleton = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
      <div class="animate-pulse shadow-xl px-2 py-1 rounded-lg">
          <a href="#">
            <div class="w-full h-[170px] bg-slate-300"></div>
            <div class="py-2 flex flex-col gap-2">
              <h3 class="h-2 w-1/2 bg-slate-300 rounded"></h3>
              <p class="h-2 w-1/3 bg-slate-300 rounded"></p>
            </div>
          </a>
        </div>
    `;
  }

  return skeleton;
};
const leftImgHighlightSkeleton = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
      	<img 
          data-src=""
          class="animate-pulse w-full h-[200px] md:h-[300px] bg-slate-300"
        />
        <div class="animate-pulse flex flex-col gap-4">
          <h3 class="h-2 w-1/2 bg-slate-300 rounded"></h3>
          <p class="h-2 w-4/5 bg-slate-300 rounded"></p>
          <p class="h-2 w-4/5 bg-slate-300 rounded"></p>
          <p class="h-2 w-4/5 bg-slate-300 rounded"></p>
          <p class="h-2 w-4/5 bg-slate-300 rounded"></p>
          <p class="h-2 w-3/5 bg-slate-300 rounded"></p>
        </div>
    `;
  }

  return skeleton;
};
const rightImgHighlightSkeleton = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
			<div class="animate-pulse flex flex-col gap-4">
				<h3 class="h-2 w-1/2 bg-slate-300 rounded"></h3>
				<p class="h-2 w-4/5 bg-slate-300 rounded"></p>
				<p class="h-2 w-4/5 bg-slate-300 rounded"></p>
				<p class="h-2 w-4/5 bg-slate-300 rounded"></p>
				<p class="h-2 w-4/5 bg-slate-300 rounded"></p>
				<p class="h-2 w-3/5 bg-slate-300 rounded"></p>
			</div>
			<img 
				data-src=""
				class="animate-pulse w-full h-[200px] md:h-[300px] bg-slate-300"
			/>
    `;
  }

  return skeleton;
};
const gallerySkeleton = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
			<div class="animate-pulse w-[180px] md:w-[320px] h-[100px] md:h-[270px] bg-slate-300"></div>
    `;
  }

  return skeleton;
};
const articleSkeleton = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
      <div class="animate-pulse px-2 py-1 rounded-lg">
        <div class="w-full h-[250px] bg-slate-300"></div>
        <div class="py-2 flex flex-col gap-2">
          <h3 class="h-2 w-1/2 bg-slate-300 rounded"></h3>
          <p class="h-2 w-1/3 bg-slate-300 rounded"></p>
        </div>
      </div>
    `;
  }

  return skeleton;
};
const eventSkeleton = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
      <div class="animate-pulse px-2 py-1 rounded-lg">
        <div class="w-full h-[250px] bg-slate-300"></div>
        <div class="py-2 flex flex-col gap-2">
          <h3 class="h-2 w-1/2 bg-slate-300 rounded"></h3>
          <p class="h-2 w-1/3 bg-slate-300 rounded"></p>
        </div>
      </div>
    `;
  }

  return skeleton;
};
const popularClassSkeleton = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
			<div class="w-full bg-slate-300 h-64 animate-pulse">
      </div>
      <div class="w-full flex flex-col gap-4">
        <h3 class="bg-slate-300 h-2 w-4/5 rounded"></h3>
        <p class="bg-slate-300 h-2 w-3/5 rounded"></p>
      </div>
    `;
  }

  return skeleton;
};
const allClassSkeleton = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
      <div class="animate-pulse px-2 py-1 rounded-lg">
        <div class="w-full h-[250px] bg-slate-300"></div>
        <div class="py-2 flex flex-col gap-2">
          <h3 class="h-2 w-1/2 bg-slate-300 rounded"></h3>
          <p class="h-2 w-1/3 bg-slate-300 rounded"></p>
        </div>
      </div>
    `;
  }

  return skeleton;
};
const galleryAdminTableSkeleton = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
      <tr class="animate-pulse border-2 p-2">
        <td class="border-2 p-2">
          <p class="w-3/5 h-2 rounded bg-slate-300"></p>
        </td>
        <td class="border-2 p-2">
          <p class="w-3/5 h-2 rounded bg-slate-300"></p>
        </td>
        <td class="border-2 p-2">
          <p class="w-3/5 h-2 rounded bg-slate-300"></p>
        </td>
        <td class="border-2 p-2">
          <p class="w-3/5 h-2 rounded bg-slate-300"></p>
        </td>
        <td class="border-2 p-2">
          <p class="w-full h-2 rounded bg-slate-300"></p>
        </td>
      </tr>
    `;
  }

  return skeleton;
};
const articleAdminTableSkeleton = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
      <tr class="animate-pulse border-2 p-2">
        <td class="border-2 p-2">
          <p class="w-3/5 h-2 rounded bg-slate-300"></p>
        </td>
        <td class="border-2 p-2">
          <p class="w-3/5 h-2 rounded bg-slate-300"></p>
        </td>
        <td class="border-2 p-2">
          <p class="w-3/5 h-2 rounded bg-slate-300"></p>
        </td>
        <td class="border-2 p-2">
          <p class="w-full h-2 rounded bg-slate-300"></p>
        </td>
      </tr>
    `;
  }

  return skeleton;
};
const eventAdminTableSkeleton = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
      <tr class="animate-pulse border-2 p-2">
        <td class="border-2 p-2">
          <p class="w-3/5 h-2 rounded bg-slate-300"></p>
        </td>
        <td class="border-2 p-2">
          <p class="w-3/5 h-2 rounded bg-slate-300"></p>
        </td>
        <td class="border-2 p-2">
          <p class="w-3/5 h-2 rounded bg-slate-300"></p>
        </td>
        <td class="border-2 p-2">
          <p class="w-3/5 h-2 rounded bg-slate-300"></p>
        </td>
        <td class="border-2 p-2">
          <p class="w-3/5 h-2 rounded bg-slate-300"></p>
        </td>
        <td class="border-2 p-2">
          <p class="w-full h-2 rounded bg-slate-300"></p>
        </td>
      </tr>
    `;
  }

  return skeleton;
};
const courseAdminTableSkeleton = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
      <tr class="animate-pulse border-2 p-2">
        <td class="border-2 p-2">
          <p class="w-3/5 h-2 rounded bg-slate-300"></p>
        </td>
        <td class="border-2 p-2">
          <p class="w-3/5 h-2 rounded bg-slate-300"></p>
        </td>
        <td class="border-2 p-2">
          <p class="w-3/5 h-2 rounded bg-slate-300"></p>
        </td>
        <td class="border-2 p-2">
          <p class="w-3/5 h-2 rounded bg-slate-300"></p>
        </td>
        <td class="border-2 p-2">
          <p class="w-full h-2 rounded bg-slate-300"></p>
        </td>
      </tr>
    `;
  }

  return skeleton;
};

export {
  highlightCardSkeleton,
  leftImgHighlightSkeleton,
  rightImgHighlightSkeleton,
  gallerySkeleton,
  articleSkeleton,
  eventSkeleton,
  popularClassSkeleton,
  allClassSkeleton,
  galleryAdminTableSkeleton,
  articleAdminTableSkeleton,
  eventAdminTableSkeleton,
  courseAdminTableSkeleton,
};
