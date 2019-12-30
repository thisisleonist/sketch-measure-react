import React from 'react';
import SelectionRulesTop from './SelectionRulesTop';
import SelectionRulesRight from './SelectionRulesRight';
import SelectionRulesBottom from './SelectionRulesBottom';
import SelectionRulesLeft from './SelectionRulesLeft';
import { getOrigin } from '../../utils/appUtils';
class SelectionRules extends React.Component {
    render() {
        const { selectionFrame, hoverFrame, artboardFrame } = this.props;
        const selectionOrigin = getOrigin(selectionFrame);
        const hoverOrigin = getOrigin(hoverFrame);
        return (React.createElement("div", { className: 'c-selection__rules' },
            selectionOrigin.top > hoverOrigin.top
                ? React.createElement(SelectionRulesTop, { selectionOrigin: selectionOrigin, hoverOrigin: hoverOrigin, artboardFrame: artboardFrame })
                : null,
            selectionOrigin.right < hoverOrigin.right
                ? React.createElement(SelectionRulesRight, { selectionOrigin: selectionOrigin, hoverOrigin: hoverOrigin, artboardFrame: artboardFrame })
                : null,
            selectionOrigin.bottom < hoverOrigin.bottom
                ? React.createElement(SelectionRulesBottom, { selectionOrigin: selectionOrigin, hoverOrigin: hoverOrigin, artboardFrame: artboardFrame })
                : null,
            selectionOrigin.left > hoverOrigin.left
                ? React.createElement(SelectionRulesLeft, { selectionOrigin: selectionOrigin, hoverOrigin: hoverOrigin, artboardFrame: artboardFrame })
                : null,
            selectionOrigin.left < hoverOrigin.left && selectionOrigin.right > hoverOrigin.right
                ? React.createElement("div", null,
                    React.createElement(SelectionRulesLeft, { selectionOrigin: hoverOrigin, hoverOrigin: selectionOrigin, artboardFrame: artboardFrame, inset: true }),
                    React.createElement(SelectionRulesRight, { selectionOrigin: hoverOrigin, hoverOrigin: selectionOrigin, artboardFrame: artboardFrame, inset: true }))
                : null,
            selectionOrigin.top < hoverOrigin.top && selectionOrigin.bottom > hoverOrigin.bottom
                ? React.createElement("div", null,
                    React.createElement(SelectionRulesTop, { selectionOrigin: hoverOrigin, hoverOrigin: selectionOrigin, artboardFrame: artboardFrame, inset: true }),
                    React.createElement(SelectionRulesBottom, { selectionOrigin: hoverOrigin, hoverOrigin: selectionOrigin, artboardFrame: artboardFrame, inset: true }))
                : null));
    }
}
export default SelectionRules;