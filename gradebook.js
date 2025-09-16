function calculateResults() {
    // Get input values
    const getMark = (id) => {
        const value = parseFloat(document.getElementById(id).value);
        return isNaN(value) ? 0 : Math.min(Math.max(value, 0), 100);
    };

    const marks = [
        getMark('subject1'),
        getMark('subject2'),
        getMark('subject3'),
        getMark('subject4'),
        getMark('subject5')
    ];

    // Calculate results
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = (totalMarks / 500) * 100;

    // Determine grade and feedback
    let grade, feedback, feedbackClass;
    if (percentage >= 90) {
        grade = 'A+';
        feedback = '🎉 Excellent! Outstanding performance!';
        feedbackClass = 'bg-green-100 text-green-800';
    } else if (percentage >= 80) {
        grade = 'A';
        feedback = '👍 Very good! Keep up the great work!';
        feedbackClass = 'bg-green-50 text-green-700';
    } else if (percentage >= 70) {
        grade = 'B';
        feedback = '👏 Good job! You\'re doing well!';
        feedbackClass = 'bg-blue-100 text-blue-800';
    } else if (percentage >= 60) {
        grade = 'C';
        feedback = '💪 Average. Keep working hard!';
        feedbackClass = 'bg-yellow-100 text-yellow-800';
    } else if (percentage >= 50) {
        grade = 'D';
        feedback = '📚 Passed. Room for improvement.';
        feedbackClass = 'bg-orange-100 text-orange-800';
    } else {
        grade = 'F';
        feedback = '❗ Needs improvement. Please seek help.';
        feedbackClass = 'bg-red-100 text-red-800';
    }

    // Display results
    document.getElementById('totalMarks').textContent = `${totalMarks}/500`;
    document.getElementById('percentage').textContent = `${percentage.toFixed(2)}%`;
    document.getElementById('grade').textContent = grade;

    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = feedback;
    feedbackElement.className = `mt-4 p-4 rounded-lg text-center font-medium ${feedbackClass}`;
    feedbackElement.classList.remove('hidden');

    // Show results card
    document.getElementById('results').classList.remove('hidden');

    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

function resetCalculator() {
    // Clear all inputs
    ['subject1', 'subject2', 'subject3', 'subject4', 'subject5'].forEach(id => {
        document.getElementById(id).value = '';
    });

    // Hide results
    document.getElementById('results').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');

    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add Enter key support
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calculateResults();
    });
});
