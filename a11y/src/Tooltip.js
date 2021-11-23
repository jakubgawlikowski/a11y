/* eslint-disable react/prop-types */
import React from "react";
import { useTooltipTriggerState } from "@react-stately/tooltip";
import { useTooltip, useTooltipTrigger } from "@react-aria/tooltip";
import { mergeProps } from "@react-aria/utils";

function Tooltip({ state, ...props }) {
  let { tooltipProps } = useTooltip(props, state);

  return (
    <span
      style={{
        position: "absolute",
        left: "5px",
        top: "100%",
        marginTop: "10px",
        backgroundColor: "red",
        color: "white",
        padding: "5px"
      }}
      {...mergeProps(props, tooltipProps)}
    >
      {props.children}
    </span>
  );
}

function ReactAriaTooltip(props) {
  let state = useTooltipTriggerState(props);
  let ref = React.useRef();

  // Get props for the trigger and its tooltip
  let { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref);

  return (
    <span style={{ position: "relative" }}>
      <button ref={ref} {...triggerProps}>
        I have a React-Aria tooltip
      </button>
      {state.isOpen && (
        <Tooltip aria-live="polite" state={state} {...tooltipProps}>
          Can you access this Tooltip?
        </Tooltip>
      )}
    </span>
  );
}

export default ReactAriaTooltip;
