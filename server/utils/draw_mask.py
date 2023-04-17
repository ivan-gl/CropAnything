"""
Draw segmentation mask on image.
"""
import cv2
import numpy as np

from typing import List, Tuple, Optional

BGR_COLOR = Tuple[int, int, int]
DEFAULT_MASK_COLORS: List[BGR_COLOR] = [[180, 119, 31],
                                        [14, 127, 255],
                                        [44, 160, 44],
                                        [40, 39, 214],
                                        [189, 103, 148],
                                        [75, 86, 140],
                                        [194, 119, 227],
                                        [127, 127, 127],
                                        [34, 189, 188],
                                        [207, 190, 23]]

def draw_mask_to_image(image: np.array,
                       masks: np.array,
                       mask_scores: np.array,
                       colors: Optional[List[BGR_COLOR]] = None,
                       mask_alpha: Optional[float] = 0.3):

    if colors is None:
        colors = DEFAULT_MASK_COLORS

    alpha = mask_alpha**(1/len(mask_scores))

    for ind in np.argsort(mask_scores):
        # select mask color from colors
        mask_color = np.array(colors[ind%len(colors)], dtype=image.dtype)
        mask = masks[ind][..., np.newaxis]
        # cast 2D mask to 3D mask with color
        mask_image = mask * mask_color.reshape(1, 1, -1)
        
        image = cv2.addWeighted(image, 1-alpha, mask_image, alpha, 0)
        
        alpha *= mask_alpha

    return image