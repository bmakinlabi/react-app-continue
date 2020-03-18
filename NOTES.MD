# 229. Absolute vs Relative Paths
- The difference between absolute and relative paths
- Example of absolute path: `example.com/new-post` and `example.com/my-new-page`
- Example of relative path: `example.com/new-post/submit-the-post` and `example.com/live-score/live-matches`
- You can do this to get the relative path: 
`pathname: this.props.match.url + '/new-post',`