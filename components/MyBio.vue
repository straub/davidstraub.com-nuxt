<template>
  <section>
    <p>
      I'm a <strong>technical leader</strong> and
      <strong>full stack web engineer</strong> who's spent
      more than <span v-text="$options.fullYearsOfExperience" /> years
      building tools and guiding agile teams that develop innovative applications for the web platform.
    </p>
    <p>
      I love life-long learning, iterative improvements, empowered engineers, constructive feedback,
      radical transparency, inclusive decision-making, proactive communication, mindful meetings,
      active maintenance, sustainable systems, healthy boundaries, and
      <a href="https://doesstraubwanttokaraoke.com/" target="_blank">karaoke</a>,
      although not necessarily in that order.
    </p>
    <p>
      I work for
      <em><a
        href="https://www.merkle.com/"
        rel="external"
        itemprop="affiliation worksFor"
        target="_blank"
      >Merkle</a></em>,
      a global customer experience transformation company, as a
      <span itemprop="jobTitle">Delivery Advocate</span>, where I'm responsible for
      <strong>platform architecture</strong> and <strong>software delivery success</strong>.
    </p>
  </section>
</template>

<script>
export default {
  fullYearsOfExperience: yearsSince(new Date(2010, 7, 6)),
}

function yearsSince (date) {
  const now = new Date()
  let years = now.getFullYear() - date.getFullYear()
  const m = now.getMonth() - date.getMonth()
  if (m < 0 || (m === 0 && now.getDate() < date.getDate())) {
    years--
  }
  return years
}
</script>

<style scoped>
p {
  text-indent: 2rem;
}
</style>
