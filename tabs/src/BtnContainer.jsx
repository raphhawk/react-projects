const BtnContainer = ({ jobs, setCurrentItem, currentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, idx) => {
        return (
          <button
            type="button"
            key={job.id}
            onClick={() => {
              setCurrentItem(idx);
            }}
            className={idx === currentItem ? "job-btn active-btn" : "job-btn"}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
};

export default BtnContainer;
