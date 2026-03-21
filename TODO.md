# PAL Optical Screenshots Update Task (Feedback Iteration)

## Information Gathered

- File analyzed: pal-optical.html
- Section: Applications - Complete Toolkit table (lines ~380-480)
- Current #4 (Master Dashboard): src="home.png" data-full="home.png"
- Current #10: "Lens Inventory" → Needs change to "Frame Inventory"
- screenshot/home.png confirmed available (VSCode tabs)

## Plan

**File: pal-optical.html**

1. Update Master Dashboard screenshot consistency:
   - Replace src="home.png" → src="screenshot/home.png"
   - Replace data-full="home.png" → data-full="screenshot/home.png"
2. Update tool name #10:
   - Replace `<td style="padding: 1rem 1rem;">Lens Inventory</td>` →
     `<td style="padding: 1rem 1rem;">Frame Inventory</td>`

## Dependent Files to be edited

None.

## Followup steps

- Verify screenshots display correctly after edits
- No installations needed

**Status** ✅ Complete - Updates applied per feedback:

- Tool #10: Lens Inventory → Frame Inventory
- Master Dashboard screenshot path: home.png → screenshot/home.png (both src and
  data-full)
