export default function Button({ onclick, text, modifier = {} }) {
    const element = document.createElement('button');

    const defaultStyles = {
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '0.375rem',
        backgroundColor: '#1d4ed8',
        color: 'white',
        fontFamily: 'sans-serif',
        cursor: 'pointer',
        fontSize: '1rem',
        transition : 'ease-in-out',
        transitionDuration : '128ms',

        hover: {
            backgroundColor: 'teal'
        }
    };

    element.textContent = text;
    element.addEventListener('click', onclick);

    element.addEventListener('mouseenter', () => {
        Object.assign(
            element.style,
            defaultStyles.hover,
            modifier.hover
        );
    });

    element.addEventListener('mouseleave', () => {
        Object.assign(
            element.style,
            defaultStyles,
            modifier
        );
    });

    Object.assign(element.style, defaultStyles, modifier);

    return element;
}
