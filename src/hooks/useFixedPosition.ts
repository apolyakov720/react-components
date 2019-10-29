import React, { useState } from 'react';

interface Modifiers {
  offset: number;
  forcePosition: 'start' | 'end';
  autoCorrectPosition: boolean;
}

interface OtherProps {
  shiftPosition: string;
}

const useAfterFixedPosition = (
  position: string,
  modifiers: Partial<Modifiers>
): [
  {
    position: React.CSSProperties;
    other: OtherProps;
  },
  (nodeTrigger: HTMLElement, nodeTarget: HTMLElement) => void
] => {
  const [positions, setPositions] = useState({
    position: { left: -9999, top: -9999, position: 'absolute' as 'absolute' },
    other: {
      shiftPosition: 'top'
    }
  });

  const updatePositions = (nodeTrigger: HTMLElement, nodeTarget: HTMLElement): void => {
    let shiftPosition = position;

    let positionX: React.CSSProperties = {};
    let positionY: React.CSSProperties = {};

    const {
      offset = 0,
      forcePosition = undefined,
      autoCorrectPosition = false
    } = modifiers;

    const {
      top: triggerTop,
      right: triggerRight,
      bottom: triggerBottom,
      left: triggerLeft,
      width: triggerWidth,
      height: triggerHeight
    } = nodeTrigger.getBoundingClientRect();

    const {
      width: targetWidth,
      height: targetHeight
    } = nodeTarget.getBoundingClientRect();

    const { clientWidth, clientHeight } = document.documentElement;

    if (forcePosition) {
      if (position === 'top' || position === 'bottom') {
        positionX =
          forcePosition === 'start'
            ? { left: triggerLeft }
            : { right: clientWidth - triggerRight };
      } else {
        positionY =
          forcePosition === 'start'
            ? { top: triggerTop }
            : { bottom: clientHeight - triggerBottom };
      }
    } else {
      if (position === 'top' || position === 'bottom') {
        positionX = { left: triggerLeft + (triggerWidth - targetWidth) / 2 };
      } else {
        positionY = { top: triggerTop + (triggerHeight - targetHeight) / 2 };
      }
    }

    const positions = {
      top: {
        bottom: clientHeight - triggerTop + offset,
        ...positionX
      },
      right: {
        ...positionY,
        left: triggerRight + offset
      },
      bottom: {
        top: triggerBottom + offset,
        ...positionX
      },
      left: {
        ...positionY,
        right: clientWidth - triggerLeft + offset
      }
    };

    let currentPosition = positions[`${position}`];

    if (autoCorrectPosition) {
      currentPosition = {};
      positionX = {};
      positionY = {};

      const targetParams = {
        totalHeight: targetHeight + offset,
        totalWidth: targetWidth + offset
      };

      const spacesOnSides = {
        onTop: triggerTop - targetParams.totalHeight > 0,
        onBottom: clientHeight - triggerBottom - targetParams.totalHeight > 0,
        onLeft: triggerLeft - targetParams.totalWidth > 0,
        onRight: clientWidth - triggerRight - targetParams.totalWidth > 0
      };

      const { top, right, bottom, left } = positions;
      const { onTop, onBottom, onLeft, onRight } = spacesOnSides;

      if (position === 'top' || position === 'bottom') {
        positionY = { bottom: top.bottom };
        positionX = { left: top.left };
        shiftPosition = 'top';

        if ((position === 'bottom' && onBottom) || !onTop) {
          positionY = { top: bottom.top };
          shiftPosition = 'bottom';
        }
      }

      if (position === 'right' || position === 'left') {
        positionY = { top: right.top };
        positionX = { left: right.left };
        shiftPosition = 'right';

        if ((position === 'left' && onLeft) || !onRight) {
          positionX = { right: left.right };
          shiftPosition = 'left';
        }
      }

      currentPosition = { ...positionX, ...positionY };
    }

    setPositions({
      position: { ...currentPosition, position: 'fixed' },
      other: {
        shiftPosition: shiftPosition
      }
    });
  };

  return [positions, updatePositions];
};

export default useAfterFixedPosition;
